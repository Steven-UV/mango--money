import { useState } from "react";
import { createId } from "lib/createId";

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([
    { id: createId(), name: "购物" },
    { id: createId(), name: "餐饮" },
    { id: createId(), name: "住房" },
    { id: createId(), name: "交通" },
  ]);
  return { tags, setTags };
};

export { useTags };
