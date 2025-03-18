import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-page";
import { Form } from "react-router";
import { Label } from "~/common/components/ui/label";
import { Input } from "~/common/components/ui/input";
import InputPair from "~/common/components/input-pair";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "~/common/components/ui/select";
import SelectPair from "~/common/components/select-pair";
export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Product | wemake" },
    { name: "description", content: "Submit your product" },
  ];
}

export default function SubmitPage({ actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero 
        title="Submit Your Product" 
        subtitle="Share your creation with the world"
      />
      <Form className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto">
        <div className="space-y-5">
          <InputPair 
            label="Name" 
            description="This is the name of your product." 
            id="name"
            name="name"
            type="text"
            required
            placeholder="Name of your product"
          />
          <InputPair 
            label="Tagline" 
            description="60 characters or less" 
            id="tagline"
            name="tagline"
            required
            type="text"
            placeholder="A concise description of your product"
          />
          <InputPair 
            label="URL" 
            description="The URL of your product" 
            id="url"
            name="url"
            required
            type="text"
            placeholder="https://example.com"
          />
          <InputPair 
            textArea
            label="Description" 
            description="A detailed description of your product" 
            id="description"
            name="description"
            required
            type="text"
            placeholder="A detailed description of your product"
          />
          <SelectPair 
            label="Category" 
            description="The category of your product" 
            name="category"
            required
            placeholder="Select a category"
            options={[
              { label: "AI", value: "ai" },
              { label: "Design", value: "design" },
              { label: "Development", value: "development" },
              { label: "Marketing", value: "marketing" },
            ]}
          />
        </div>
      </Form>
    </div>
  );
}