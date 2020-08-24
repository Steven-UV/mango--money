import { useState } from "react";

const useTags = () => {
  const [tags, setTags] = useState<string[]>(["购物", "餐饮", "住房", "交通"]);
  return { tags, setTags };
};

export { useTags };
