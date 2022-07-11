import IProject from "./IProject";

export default interface ITask{
    duracaoEmSegundos: number,
    descricao: string,
    project: IProject
}