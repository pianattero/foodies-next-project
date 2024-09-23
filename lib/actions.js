'use server';

import { redirect } from "next/dist/server/api-utils";

import { saveMeal } from "./meals";

export async function submitMeal(formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    await saveMeal(meal)
    redirect('/meals');

    // console.log(meal) // se pinta en la terminal local, no en la de la web
}