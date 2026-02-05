import config from "@/config";

export async function GET() {
  return Response.json({
    apiUrl: config.apiUrl,
    name: config.appName,
    version: config.appVersion,
  });
}
