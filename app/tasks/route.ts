import { taskModel } from "@Schema/schema";

export async function GET(request: Request) {
  const model = await taskModel.find();
  console.log(model);
}
