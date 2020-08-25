import { useState } from "react";
import { createId } from "lib/createId";

const defaultTags = [
  { id: createId(), name: "购物" },
  { id: createId(), name: "餐饮" },
  { id: createId(), name: "住房" },
  { id: createId(), name: "交通" },
];
const useTags = () => {
  const findTag = (id: number) => tags.filter((tag) => tag.id === id)[0];
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  return { tags, setTags, findTag };
};

export { useTags };
