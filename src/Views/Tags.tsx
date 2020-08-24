import Layout from "components/Layout";
import React from "react";
import { useTags } from "useTags";
import Icon from "../components/Icon";
import styled from "styled-components";

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: rgb(255, 218, 68);
  border-radius: 4px;
  color: white;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;
const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 16px;
    margin-left: 16px;
    margin-right: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
function Tags() {
  const { tags, setTags } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <li key={tag}>
            <span>{tag}</span>
            <Icon name="right" />
          </li>
        ))}
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
