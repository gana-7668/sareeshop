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
import { products } from '@/lib/data';

const SareeRecommendationsInputSchema = z.object({
  userProfile: z
    .string()
    .describe('The user profile, including purchase history and preferences.'),
  trendingItems: z.string().optional().describe('A summary of currently trending saree items.'),
  socialMediaTrends: z.string().optional().describe('A summary of saree trends on social media.'),
});
export type SareeRecommendationsInput = z.infer<typeof SareeRecommendationsInputSchema>;

const SareeRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('A list of 5 recommended saree names from the available product list that best match the user profile and trends.'),
});
export type SareeRecommendationsOutput = z.infer<typeof SareeRecommendationsOutputSchema>;


export async function getSareeRecommendations(
  input: SareeRecommendationsInput
): Promise<SareeRecommendationsOutput> {
  return sareeRecommendationsFlow(input);
}

const allSarees = products.map(p => `'${p.name}' (${p.category}, ${p.color}, ${p.fabric})`).join('\n');

const prompt = ai.definePrompt({
  name: 'sareeRecommendationsPrompt',
  input: {schema: SareeRecommendationsInputSchema},
  output: {schema: SareeRecommendationsOutputSchema},
  prompt: `You are a personal saree recommendation assistant for an online saree shop. Your goal is to provide 5 saree recommendations that a user is likely to purchase.

You have access to the full list of available sarees. You must only recommend sarees from this list.

Available Sarees:
${allSarees}

Use the following information to make your recommendations:

1.  **User Profile**: This is the most important factor. Analyze their past purchases, color/fabric preferences, and budget.
    {{{userProfile}}}

2.  **Trending Items**: Consider what is currently popular.
    {{#if trendingItems}}Trending Items: {{{trendingItems}}}{{/if}}

3.  **Social Media Trends**: Consider what styles are being shared on social media.
    {{#if socialMediaTrends}}Social Media Trends: {{{socialMediaTrends}}}{{/if}}

Based on all this information, analyze the user's profile and decide which 5 sarees from the "Available Sarees" list would be the best fit for them. Return only the names of the 5 recommended sarees.`,
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
