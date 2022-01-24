import { useState, useCallback } from "react";

// 만들긴했는데... 안써도 될 것 같다...?

const useLogin = (initalValue: any) => {
     
    // state 정의
    const [data, setData] = useState(initalValue);

    // 함수 정의
    const handler = useCallback(
    e => {
        const { value, name } = e.target;
        setData({
        ...data,
        [name]: value
        });
    },
        [data]
    );

    return [data, handler];
};

export default useLogin;