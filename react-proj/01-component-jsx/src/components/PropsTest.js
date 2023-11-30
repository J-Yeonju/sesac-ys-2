import proptypes from "prop-types";

function PropsTest({food}) {
    return (
        <>
            <span style={{color: 'red'}}>{food}</span>은 아삭아삭 맛있어요.
        </>
    )
}

PropsTest.defaultValue = {
    food : '애플포도 탕후루',
};

export default PropsTest;