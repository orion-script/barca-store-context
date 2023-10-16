import React, { FC } from "react"; // Import React here

import { useNavigate } from "react-router-dom";
import { DirectoryCategory } from "../../types/CategoriesTypes";
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./DirectoryItemStyles";

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  console.log(category);

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
