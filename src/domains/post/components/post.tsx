import Column from "@global/styles/layouts/Column";
import { Container } from "@global/styles/layouts/Container";
import Row from "@global/styles/layouts/Row";
import { Span } from "@global/styles/text/Span";
import { PostMockService } from "@post/services/postMockServices";
import { IPost } from "@post/types/post.type";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function DetailedPost() {
  const [post, setPost] = useState<IPost>();

  const postService = new PostMockService();

  useEffect(() => {
    postService.getPost().then(setPost);
  });

  return (
    <>
      {post && (
        <Container width="600px" margin="auto">
          <Column>
            <Span fontWeight="100" fontSize="16px">
              {post.category}
            </Span>
            <Row mainAxis="space-between" crossAxis="center">
              <Span fontWeight="700" fontSize="24px">
                {post.title}
              </Span>
              <Container
                borderRadius="16px"
                padding="9px 16px"
                backgroundColor="purple"
              >
                <Span fontColor="white">+ 스크랩</Span>
              </Container>
            </Row>
            <HorizontalDivider />

            <Row crossAxis="center">
              <CharacterProfile></CharacterProfile>
              <Column>
                <Span>{post.owner.name}</Span>
                <Span>30분전</Span>
              </Column>
            </Row>
            <Span>{post.contents}</Span>

            <Row height="max-content" mainAxis="start">
              <Span>조회 {post.view}</Span>
              <VerticalDivider />
              <Span>신고</Span>
            </Row>
            <HorizontalDivider />

            <Span>
              댓글 <Span>{post.comments.length}</Span>
            </Span>
            <Row crossAxis="center" mainAxis="space-between">
              <CharacterProfile></CharacterProfile>
              <Input></Input>
              <Container
                borderRadius="16px"
                padding="9px 16px"
                backgroundColor="purple"
              >
                <Span fontColor="white">등록</Span>
              </Container>
            </Row>
            {post.comments.map((comment) => (
              <>
                <Row crossAxis="center" mainAxis="start">
                  <CharacterProfile></CharacterProfile>
                  <Span fontColor="purple">{comment.user.name}</Span>
                  <Span>{comment.contents}</Span>
                </Row>
              </>
            ))}
          </Column>
        </Container>
      )}
    </>
  );
}

const Input = styled.input`
  height: 44px;
  width: 400px;
  border: 1px solid blue;
  border-radius: 24px;
  &:focus {
    outline: none;
  }
`;

const CharacterProfile = () => {
  return (
    <>
      <Container
        padding="5px"
        height="60px !important"
        width="60px !important"
        borderRadius="100%"
        border="2px solid purple"
      >
        <Container
          height="100%"
          width="100%"
          borderRadius="100%"
          backgroundColor="yellow"
        ></Container>
      </Container>
    </>
  );
};

const HorizontalDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: black;
`;

const VerticalDivider = styled.div`
  width: 1px;
  height: 100%;
  background-color: black;
`;
