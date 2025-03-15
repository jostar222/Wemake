import { Link, type MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { ChevronUpIcon, DotIcon, EyeIcon, HeartIcon, MessageCircleIcon } from "lucide-react";
import { ProductCard } from "~/features/products/components/product-card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { Badge } from "../components/ui/badge";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export default function HomePage() {
  return ( 
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button variant="link" asChild className="text-xl p-0">
            <Link to="/products/leaderboards">Explore all Products &rarr;</Link>
          </Button>
        </div>
          {Array.from({length: 10}).map((_, index) => ( 
            <ProductCard
              key={`productId-${index}`}
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={12}
              viewsCount={12}
              votesCount={120}
          />))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions from our community.
          </p>
          <Button variant="link" asChild className="text-xl p-0">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({length: 10}).map((_, index) => ( 
          <PostCard
          id="postId"
          title="What is the best productivity tool?"
          author="Nico"
          authorAvatarUrl="https://github.com/apple.png"
          category="Productivity"
          postedAt="12 hours ago"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            IdeasGPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({length: 5}).map((_, index) => (
          <IdeaCard
          id="ideaId"
          title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business."
          viewCount={123}
          postedAt="12 hours ago"
          likesCount={12}
          claimed={index % 2 === 0}
        /> 
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your dream job.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({length: 11}).map((_, index) => (
          <JobCard
          id="jobId"
          company="Tesla"
          companyLogoUrl="https://github.com/facebook.png"
          companyHq="San Francisco, CA"
          title="Software Engineer"
          postedAt="12 hours ago"
          type="Full-time"
          positionLocation="Remote"
          salary="$100,000 - $120,000"
        />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Find a team mate
          </h2>
          <p className="text-xl font-light text-foreground">
            Join a team looking for a new member.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
          <TeamCard
            key={`teamId-${index}`}
            id={`teamId-${index}`}
            leaderUsername="lynn"
            leaderAvatarUrl="https://github.com/inthetiger.png"
            positions={[
              "React Developer",
              "Backend Developer",
              "Product Manager",
            ]}
            projectDescription="a new social media platform"
          />
        ))}
       </div>
    </div>
  );
} 