import {useForm} from "react-hook-form"

export default function PracHookForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onVaild = (data) => {
        console.log(data);
    };

    const onInvaild = (err) => {
        console.log("실패", err);
    };

    return(
        <>
            <h3>hook form 실습</h3>      
            <form onSubmit={handleSubmit(onVaild, onInvaild)}>
                <input 
                    type="text"
                    placeholder="이름"
                    {...register("name", {
                        required: "이름은 필수 항목입니다."
                    })}
                />
                {errors.name?.message}
                <br />
                <input 
                    type="number"
                    placeholder="나이"
                    {...register("age", {
                        required: "0이상의 숫자만 입력이 가능합니다.",
                        validate: (v) => v > 0 || "0 이상의 숫자만 입력이 가능합니다.",
                    })}
                />

                {errors.age?.message}
                <br />
                <button type="submit">제출</button>
            </form>
        </>
    )
}