import CreateForm from "@/components/create-form";
import {Button} from "@/components/ui/button";
import TabHeader from "@/components/ui/typography/tab-header";
import {PlusIcon} from "lucide-react";
import Link from "next/link";
import React from "react";

function FormLayoutOut({ children }: { children: React.ReactNode }) {

  return (
    <section className="flex flex-col flex-1 w-full h-full self-stretch">
      <div className="flex flex-1 w-full h-full">{children}</div>
      <CreateForm />
    </section>
  );
}

export default FormLayoutOut;

