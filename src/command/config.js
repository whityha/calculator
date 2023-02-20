import AddCommand from './AddCommand';
import DivideCommand from './DivideCommand';
import MultiplyCommand from './MultiplyCommand';
import RemainderCommand from './RemainderCommand';
import SubtractCommand from './SubtractCommand';

export const AddCommandOptions = {
    command: AddCommand,
    sign: '+',
    priority: 1,
};

export const SubtractCommandOptions = {
    command: SubtractCommand,
    sign: '-',
    priority: 1,
};

export const MultiplyCommandOptions = {
    command: MultiplyCommand,
    sign: '×',
    priority: 2,
};

export const DivideCommandOptions = {
    command: DivideCommand,
    sign: '/',
    priority: 2,
};
export const RemainderCommandOptions = {
    command: RemainderCommand,
    sign: '%',
    priority: 2,
};
