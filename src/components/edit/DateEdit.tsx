import { useState } from 'react';
import styled from 'styled-components';

interface props {
    startDate: string;
    endDate: string;
    setStartDate: (...args: any[]) => any;
    setEndDate: (...args: any[]) => any;
}
const DateEdit = ({ startDate, setStartDate, endDate, setEndDate }: props) => {
    const [dateEdit, setDateEdit] = useState<boolean>(false);

    const handleChangeEdit = () => {
        setDateEdit((current) => !current);
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
                    <label>
                        제작 시작일:{' '}
                        <input
                            type="date"
                            name="startDate"
                            value={startDate}
                            onChange={({ target }) => setStartDate(target.value)}
                        />
                    </label>
                    <label>
                        제작 종료일:{' '}
                        <input
                            type="date"
                            name="endDate"
                            value={endDate}
                            onChange={({ target }) => setEndDate(target.value)}
                        />
                    </label>
                    <button
                        onClick={() => {
                            if (startDate > endDate) alert('종료일이 시작일보다 빠릅니다!');
                            else handleChangeEdit();
                        }}
                    >
                        확인
                    </button>
                </>
            )}
        </Div>
    );
};

export default DateEdit;
const Div = styled.div`
    font-size: 1.5em;
    color: #757575;
    display: flex;
    flex-direction: column;

    margin-right: auto;
`;
