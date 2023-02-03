import { createReducer } from '@reduxjs/toolkit';
import initialState from '../initialState';
import {
    drawDisplay,
    clear,
    drawHistoryDisplay,
} from '../actions/displayActions';
import {
    AddCommand,
    MultiplyCommand,
    DivideCommand,
    SubtractCommand,
    ReminderCommand,
    calc,
} from '../../command/command';
import { MAX_DISPLAY_LENGTH } from '../../constants/options';

export default createReducer(initialState, {
    [drawDisplay]: (state, { payload }) => {
        const dotCondition = state.value ? state.value.indexOf('.') !== -1 : 0;
        const lengthValue = state.value ? state.value.length : 0;
        const lengthCondition = lengthValue < MAX_DISPLAY_LENGTH;
        const currentCondition = calc.current === 0;
        // Сброс памяти, если последним нажималось равно '='
        if (calc.isEqual) {
            state.value = initialState.value;
            state.historyValue = initialState.historyValue;
            calc.formula = false;
            calc.isEqual = !calc.isEqual;
        }

        switch (payload.name) {
            case 'zero':
                if (currentCondition) state.value = payload.dig;
                else if (!state.value) state.value = payload.dig;
                else if (
                    lengthCondition &&
                    (dotCondition || Number(state.value) > 0)
                )
                    state.value += payload.dig;
                break;
            case 'dot':
                if (!state.value) state.value = payload.dig;
                else if (state.value === '0' && lengthCondition)
                    state.value += payload.dig;
                else if (dotCondition) break;
                else if (lengthCondition) state.value += payload.dig;
                break;
            default:
                if (currentCondition) {
                    state.value = payload.dig;
                } else if (lengthCondition)
                    state.value =
                        state.value && state.value !== '0'
                            ? (state.value += payload.dig)
                            : payload.dig;
        }
        calc.current = state.value;
        calc.isRegistered = false;
    },
    [clear]: (state, { payload }) => {
        switch (payload.deep) {
            case 'display':
                state.value = 0;
                break;
            case 'displayAll':
                state.value = 0;
                state.historyValue = '';
                calc.clear();
                break;
            case 'deep':
                // eslint-disable-next-line no-restricted-globals, no-alert
                if (confirm('Действительно очистить всё?')) {
                    state.value = 0;
                    state.historyValue = '';
                    calc.clear();
                    state.formulas = [];
                }
                break;
            case 'clearHistory':
                state.formulas = [];
                break;
            default:
        }
    },
    [drawHistoryDisplay]: (state, { payload }) => {
        const changeHistory = () => {
            state.historyValue = calc.formula ? calc.formula : '';
        };
        switch (payload.name) {
            case 'plus':
                state.value = calc.getResult() ?? state.value;
                calc.registerCommand(new AddCommand(state.value));
                changeHistory();
                break;
            case 'multiply':
                state.value = calc.getResult() ?? state.value;
                calc.registerCommand(new MultiplyCommand(state.value));
                changeHistory();
                break;
            case 'divide':
                state.value = calc.getResult() ?? state.value;
                calc.registerCommand(new DivideCommand(state.value));
                changeHistory();
                break;
            case 'remainder':
                state.value = calc.getResult() ?? state.value;
                calc.registerCommand(new ReminderCommand(state.value));
                changeHistory();
                break;
            case 'minus':
                state.value = calc.getResult() ?? state.value;
                calc.registerCommand(new SubtractCommand(state.value));
                changeHistory();
                break;
            case 'equal':
                if (!calc.isEqual && calc.current && calc.formula) {
                    state.value = calc.equal();
                    state.formulas.push(calc.formula + state.value);
                    changeHistory();
                }
                break;
            default:
        }
    },
});
