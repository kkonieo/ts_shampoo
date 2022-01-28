import { ProjectProps } from 'ProjectPageModule';
interface IProps {
    data?: ProjectProps.IProjectProps[];
    handleChangeToggle?: (...args: any[]) => any;
    handleSubmit?: (...args: any[]) => any;
}

const ProjectEditPage = ({ handleChangeToggle, handleSubmit }: IProps) => {
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">수정</button>
            <button type="button" onClick={handleChangeToggle}>
                취소
            </button>
        </form>
    );
};

export default ProjectEditPage;
