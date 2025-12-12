import { Card, CardContent } from "./card";

type StatCardProps = {
  title: string;
  value: number;
  description?: string;
};

export default function StatCard({ title, value, description }: StatCardProps) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-6">
        <p className="text-sm text-text-secondary">{title}</p>
        <p className="text-3xl font-semibold mt-2">{value}</p>
        {description && (
          <p className="text-xs text-text-secondary mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
