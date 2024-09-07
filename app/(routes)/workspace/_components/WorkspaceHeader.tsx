import { Button } from "@/components/ui/button";
import { Link, Save } from "lucide-react";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";

import Image from "next/image";
import React from "react";

function WorkspaceHeader({ onSave }: any) {
  return (
    <div className="p-3 border-b flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image src={"/logo-1.png"} alt="logo" height={40} width={40} />
        <h2>File Name</h2>
      </div>
      <div className="flex items-center gap-4">
        <Button
          className="h-8 text-[12px]
        gap-2 bg-yellow-500 hover:bg-yellow-600"
          onClick={() => onSave()}
        >
          <Save className="h-4 w-4" /> Save{" "}
        </Button>
        <Button
          className="h-8 text-[12px]
        gap-2 bg-blue-600 hover:bg-blue-700"
        >
          Share <Link className="h-4 w-4" />{" "}
        </Button>

        <FacebookShareButton
          url={"https://github.com/next-share"}
          quote={
            "next-share is a social share buttons for your next React apps."
          }
          hashtag={"#nextshare"}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <WhatsappShareButton
          className="h-8 text-[12px]
        gap-2 bg-blue-600 hover:bg-blue-700"
          url={"https://github.com/next-share"}
          title={
            "next-share is a social share buttons for your next React apps."
          }
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <TelegramShareButton
          url={"https://github.com/next-share"}
          title={
            "next-share is a social share buttons for your next React apps."
          }
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </div>
    </div>
  );
}

export default WorkspaceHeader;
