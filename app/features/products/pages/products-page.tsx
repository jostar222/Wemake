import { redirect } from "react-router";

export function loader() {
  return redirect("/products/leaderboards");
  //return Response.json({hello: "world"});
}