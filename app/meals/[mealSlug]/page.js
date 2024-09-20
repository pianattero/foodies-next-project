export default function MealDetailsPage( {params} ) {
    return (
      <main>
        <h1>Meal Post</h1>
        <p>{params.mealSlug}</p>
      </main>
    );
  }