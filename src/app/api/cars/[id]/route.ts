import { cookies } from "next/headers";

import { CAR_STATUS_AVAILABLE } from "@/constants/cars";
import { TOKEN } from "@/constants/contants";
import { User } from "@/lib/types/user.types";
import { USER_ROLE_ADMIN } from "@/constants/user";
import { verifyJWT } from "@/utils/jwt";
import supabase from "@/config/database";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export const GET = async (req: Request, { params }: Params) => {
  const { id } = await params;

  if (!id) {
    return Response.json({ message: "Car ID is required." }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("cars")
    .select(`*, car_images (id,url,featured,created_at)`)
    .eq("id", id)
    .single();

  if (error) return Response.json({ message: error.message }, { status: 500 });

  return Response.json(data, { status: 200 });
};

export const DELETE = async (req: Request, { params }: Params) => {
  const authToken = (await cookies()).get(TOKEN)?.value;

  if (!authToken) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const authUser = (await verifyJWT(authToken).catch((error) => error)) as User;

  if (authUser?.role !== USER_ROLE_ADMIN) {
    return Response.json({ message: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;

  if (!id) {
    return Response.json({ message: "Car ID is required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("cars")
    .update({
      deleted_at: new Date().toISOString(),
    })
    .select("*")
    .eq("id", id)
    .single();

  await supabase
    .from("rental_cars")
    .update({
      deleted_at: new Date().toISOString(),
    })
    .eq("car_id", id);

  await supabase
    .from("sale_cars")
    .update({
      deleted_at: new Date().toISOString(),
    })
    .eq("car_id", id);

  if (error) return Response.json({ message: error.message }, { status: 500 });

  return Response.json(data, { status: 200 });
};

export const PATCH = async (request: Request, { params }: Params) => {
  const authToken = (await cookies()).get(TOKEN)?.value;

  if (!authToken) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const authUser = (await verifyJWT(authToken).catch((error) => error)) as User;

  if (authUser?.role !== USER_ROLE_ADMIN) {
    return Response.json({ message: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;

  if (!id) {
    return Response.json(
      { message: "Rental car ID is required" },
      { status: 400 },
    );
  }

  const body = await request.json();

  const { data, error } = await supabase
    .from("cars")
    .update({
      status: body?.status || CAR_STATUS_AVAILABLE,
      updated_at: new Date().toISOString(),
    })
    .select("*")
    .eq("id", id)
    .single();

  if (error) return Response.json({ message: error.message }, { status: 500 });

  return Response.json(data, { status: 200 });
};
