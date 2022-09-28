import { useRef } from "react";

import styled from "@emotion/styled";

import securePostMessage from "../utils/securePostMessage";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCreate = () => {
    const count = Number(inputRef.current?.value || 0);

    securePostMessage({ pluginMessage: { type: "create-rectangles", count } });
  };

  const handleCancel = () => {
    securePostMessage({ pluginMessage: { type: "cancel" } });
  };

  return (
    <>
      <Input ref={inputRef} type="number" defaultValue={1} />
      <Container>
        <Button type="button" onClick={handleCreate}>
          create
        </Button>
        <Button type="button" onClick={handleCancel}>
          cancel
        </Button>
      </Container>
    </>
  );
};

const Input = styled.input`
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Button = styled.button`
  width: 150px;
  background-color: lightgray;
  padding: 10px;
`;

export default Home;
