import { styled } from "styled-components";
import MainReview from "@/components/main/MainReview";
import { useMain } from "@/hooks/useMain";

function Home() {
    const { reviews } = useMain();

    return (
        <HomeStyle>
            {/* 배너 */}

            {/* 베스트셀러*/}

            {/* 신간  */}

            {/* 리뷰 */}
            <MainReview reviews={reviews} />
            <div>home body</div>
        </HomeStyle>
    )
}

const HomeStyle = styled.div``;

export default Home;