import { db } from "@/db/index";
import { usersTable } from "@/db/schema/usersTable";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // static by default, unless reading the request
export const runtime = "edge"; // specify the runtime to be edge

export async function GET(request: Request) {
	const users = await db.select().from(usersTable);

	return NextResponse.json({ users, message: "success" });
}
