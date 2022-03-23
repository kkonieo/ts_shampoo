import { useState } from 'react';
import styled from 'styled-components';

interface props {
    startDate: string;
    endDate: string;
    setStartDate: (...args: any[]) => any;
    setEndDate: (...args: any[]) => any;
    editMode: boolean;
}
const DateEdit = ({ startDate, setStartDate, endDate, setEndDate, editMode }: props) => {
    const [dateEdit, setDateEdit] = useState<boolean>(false);

    const handleChangeEdit = () => {
        if (editMode) setDateEdit((current) => !current);
    };
    return (
        <Div>
            {!dateEdit && (
                <p onClick={handleChangeEdit}>
                    {`제작 기간 : ${startDate.replace(/-/gi, '.')} ~ ${endDate.replace(/-/gi, '.')}`}
                </p>
            )}
            {dateEdit && (
                <>
                    <div className="inputDiv">
                        <label className="start">
                            제작 시작일:{' '}
                            <input
                                type="date"
                                name="startDate"
                                value={startDate}
                                onChange={({ target }) => setStartDate(target.value)}
                            />
                        </label>
                        <label className="end">
                            제작 종료일:{' '}
                            <input
                                type="date"
                                name="endDate"
                                value={endDate}
                                onChange={({ target }) => setEndDate(target.value)}
                            />
                        </label>
                    </div>
                    <div className="buttonDiv">
                        <button
                            onClick={() => {
                                if (startDate > endDate) alert('종료일이 시작일보다 빠릅니다!');
                                else handleChangeEdit();
                            }}
                        >
                            확인
                        </button>
                    </div>
                </>
            )}
            <hr />
        </Div>
    );
};

export default DateEdit;
const Div = styled.div`
    font-size: 1.5em;
    color: #757575;
    display: flex;
    flex-direction: row;
    width: 70%;

    input {
        margin-left: auto;
    }

    .inputDiv {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    label {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .buttonDiv {
        display: flex;
        width: 50%;
        button {
            width: 5em;
            height: 3em;
        }
    }

    margin-bottom: 2%;
`;
