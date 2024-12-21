import React, { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  className?: string;
  children?: ReactNode;
  renderItem?: (item: T) => ReactNode;
}

const List = <T extends { id?: string | number }>({
  items,
  className = "",
  children,
  renderItem,
}: ListProps<T>) => {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={item.id || index}>
          {renderItem ? renderItem(item) : children}
        </li>
      ))}
    </ul>
  );
};

export default List;
