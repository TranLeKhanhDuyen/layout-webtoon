import React from "react";

interface LinkTextProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
}

const LinkText = ({ href, children, ...props }: LinkTextProps) => {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default LinkText;
