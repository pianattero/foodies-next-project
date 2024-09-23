'use server';

import { redirect } from "next/dist/server/api-utils";

import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
    !text || text.trim() === ''
}

export async function submitMeal(prevState, formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ) {
        return {
            message: 'Invalid input'
        }
    }

    await saveMeal(meal)
    revalidatePath('/meals'); // esto es para cuando se lanza en producción, porque para optimizar la navegación para el usuario, cuando hacemos un build, next crea las páginas y guarda su información como estática. Entonces, si hay cambios en alguna de ellas, no se actualizan. Por eso, para las páginas dinámicas, se usa el 'revalidatePath()'
    redirect('/meals');

    // console.log(meal) // se pinta en la terminal local, no en la de la web
}