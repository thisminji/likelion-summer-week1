//Card.jsx
import styled from "styled-components";
import favoriteIcon from "../assets/icons/favorite.svg";

function Card({ item }) {
    return (
        <CardWrapper>
            <Thumbnail src={item.thumbnail} alt={item.title} />
            <CardContent>
                <Title>{item.title}</Title>
                <Description>{item.content}</Description>
                {/* 날짜만 표시하기 위해서 split 사용함 */}
                <MetaInfo>{item.createdAt.split(" ")[0]} · {item.comments}개의 댓글</MetaInfo>

                <AuthorSection>
                    <AuthorInfo>
                        <ProfileImg src={item.profileImg} alt={item.username} />
                        <AuthorName>
                            <ByText>by </ByText>{item.username}
                        </AuthorName>
                    </AuthorInfo>
                    <LikeCount>
                        <Icon src={favoriteIcon} alt="like" />
                        {item.likes}
                    </LikeCount>
                </AuthorSection>
            </CardContent>
        </CardWrapper>
    );
}

export default Card;


const CardWrapper = styled.div`
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    //부모 요소에 꽉 채우기
    object-fit: cover;
    background-color: #f1f3f5;
`;

const CardContent = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Title = styled.h3`
    font-size: 1.1rem;
    font-weight: 700;
    color: #212529;
    margin: 0;
`;

const Description = styled.p`
    font-size: 0.9rem;
    color: #495057;
    line-height: 1.4;
    margin-bottom: 0px;
    margin-top: 0px;
`;

const MetaInfo = styled.div`
    font-size: 0.75rem;
    color: #868e96;
    margin-top: 4px;
`;

const AuthorSection = styled.div`
    margin-top: auto;
    padding-top: 12px;
    border-top: 1px solid #e9ecef;  
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const ProfileImg = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
`;

const AuthorName = styled.span`
    font-size: 0.85rem;
    color: #343a40;
`;

const ByText = styled.span`
    color: #868e96;
`;

const LikeCount = styled.div`
    font-size: 0.9rem;
    color: #212529;
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 6px;
    //인라인 요소의 세로 정렬
    vertical-align: middle;
`;