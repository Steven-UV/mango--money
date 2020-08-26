import { useState, useEffect } from "react";
import { createId } from "lib/createId";
import { useUpdate } from "./useUpdate";

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    if (localTags.length === 0) {
      localTags = [
        { id: createId(), name: "购物" },
        { id: createId(), name: "餐饮" },
        { id: createId(), name: "住房" },
        { id: createId(), name: "交通" },
      ];
    }
    setTags(localTags);
  }, []);

  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);
  const findTag = (id: number) => tags.filter((tag) => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, { name }: { name: string }) => {
    setTags(tags.map((tag) => (tag.id === id ? { id, name: name } : tag)));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt("请输入标签名");
    if (tagName !== null && tagName !== "") {
      setTags([...tags, { id: createId(), name: tagName }]);
    }
  };
  return { tags, addTag, setTags, findTag, updateTag, findTagIndex, deleteTag };
};

export { useTags };