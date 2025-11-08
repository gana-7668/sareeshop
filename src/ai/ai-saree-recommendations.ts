// src/ai/ai-saree-recommendations.ts
'use server';

/**
 * @fileOverview Saree recommendation AI agent.
 *
 * - getSareeRecommendations - A function that returns personalized saree recommendations.
 * - SareeRecommendationsInput - The input type for the getSareeRecommendations function.
 * - SareeRecommendationsOutput - The return type for the getSareeRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SareeRecommendationsInputSchema = z.object({
  userProfile: z
    .string()
    .describe('The user profile, including purchase history and preferences.'),
  trendingItems: z.string().optional().describe('Trending saree items.'),
  socialMediaTrends: z.string().optional().describe('Saree trends on social media.'),
});
export type SareeRecommendationsInput = z.infer<typeof SareeRecommendationsInputSchema>;

const SareeRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('A list of saree recommendations based on the user profile.'),
});
export type SareeRecommendationsOutput = z.infer<typeof SareeRecommendationsOutputSchema>;

const incorporateTrendingItems = ai.defineTool({
  name: 'incorporateTrendingItems',
  description: 'Check trending saree items and optionally incorporate them into the recommendations.',
  inputSchema: z.object({
    shouldIncorporate: z
      .boolean()
      .describe('Whether to incorporate trending items into the recommendations.'),
  }),
  outputSchema: z.string(),
}, async (input) => {
  if (input.shouldIncorporate) {
    // In a real application, this would fetch trending items from a database or API.
    return 'Trending items incorporated.';
  }
  return 'Trending items not incorporated.';
});

const incorporateSocialMediaTrends = ai.defineTool({
  name: 'incorporateSocialMediaTrends',
  description: 'Check social media trends and optionally incorporate them into the recommendations.',
  inputSchema: z.object({
    shouldIncorporate: z
      .boolean()
      .describe('Whether to incorporate social media trends into the recommendations.'),
  }),
  outputSchema: z.string(),
}, async (input) => {
  if (input.shouldIncorporate) {
    // In a real application, this would fetch social media trends from an API.
    return 'Social media trends incorporated.';
  }
  return 'Social media trends not incorporated.';
});

export async function getSareeRecommendations(
  input: SareeRecommendationsInput
): Promise<SareeRecommendationsOutput> {
  return sareeRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'sareeRecommendationsPrompt',
  input: {schema: SareeRecommendationsInputSchema},
  output: {schema: SareeRecommendationsOutputSchema},
  tools: [incorporateTrendingItems, incorporateSocialMediaTrends],
  prompt: `You are a personal saree recommendation assistant.

Based on the user's profile and purchase history:

{{userProfile}}

Recommend sarees that match their taste and preferences.

Decide whether to incorporate trending saree items and social media trends into the recommendations, using the appropriate tools if necessary.

Trending Items: {{trendingItems}}
Social Media Trends: {{socialMediaTrends}}`,
});

const sareeRecommendationsFlow = ai.defineFlow(
  {
    name: 'sareeRecommendationsFlow',
    inputSchema: SareeRecommendationsInputSchema,
    outputSchema: SareeRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
