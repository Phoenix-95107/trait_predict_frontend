import Navicator from "@/components/ui/Navigator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navicator />
      <main>{children}</main>
    </div>
  );
}
