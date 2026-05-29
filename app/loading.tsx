import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function GlobalLoadingSkeleton() {
  return (
    <div className="container mx-auto max-w-5xl py-10 px-4 space-y-4 md:space-y-10 font-sans animate-pulse">
      <header className="pt-20 pb-12 flex flex-col items-center text-center gap-4">
        <div className="h-12 w-64 bg-muted rounded-md" />
        <div className="h-6 w-96 bg-muted rounded-md" />
      </header>

      <div className="h-8 w-44 bg-muted rounded-md mb-4" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((index) => (
          <Card key={index} className="md:col-span-1 col-span-2 border border-muted-foreground/10 bg-card">
            <CardHeader className="space-y-3">
              <div className="flex gap-2">
                <div className="h-5 w-12 bg-muted rounded-sm" />
                <div className="h-5 w-16 bg-muted rounded-sm" />
              </div>
              <div className="h-6 w-3/4 bg-muted rounded-md" />
              <div className="h-4 w-full bg-muted rounded-md" />
            </CardHeader>
            <CardContent>
              <div className="h-4 w-20 bg-muted rounded-md" />
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
