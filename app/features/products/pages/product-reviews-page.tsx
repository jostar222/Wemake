
interface ReviewData {
  id: string;
  content: string;
  rating: number;
  authorId: string;
  createdAt: string;
}

export function loader({ params }: Route.LoaderArgs) {
  // Fetch reviews for the product using params.productId
  return {
    reviews: [] as ReviewData[]
  };
}

export function Component({ loaderData }: Route.ComponentProps) {
  const { reviews } = loaderData;

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">Product Reviews</h1>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Rating: {review.rating}/5</span>
              </div>
              <time className="text-sm text-gray-500">{review.createdAt}</time>
            </div>
            <p className="mt-2">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function meta(): Route.MetaFunction {
  return [
    { title: "Product Reviews" }
  ];
} 