type PageTitleProps = {
  title: string;
  subtitle?: string;
};

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-semibold">{title}</h1>

        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs text-primary">
          Demo
        </span>
      </div>

      {subtitle && (
        <p className="text-sm text-text-secondary mt-1">{subtitle}</p>
      )}
    </div>
  );
}
