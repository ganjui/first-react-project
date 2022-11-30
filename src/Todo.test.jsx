import { render,fireEvent, getAllByRole } from "@testing-library/react";
import {screen,getByRole,getByLabelText} from '@testing-library/react'

import Todo from "./Todo";


describe('My component', () => {
    it('should verify the input label and the button are visible', () => {
        render(<Todo />);
        const inputNode1 = screen.getByLabelText("what needs to be done?");
        expect(inputNode1.closest("input").value).toEqual("");
        expect(screen.getByRole('button')).toBeEnabled();
        expect(screen.getByRole('button', { name: "Add #1" })).toBeVisible();
    });
    
   it('should show what needs to be done?', () => {
    render(<Todo />);
    expect(screen.getByRole('heading')).toHaveTextContent('TODO');
   });
   
   it(' a button what needs to be done? should be visible', () => {
    render(<Todo />);
    expect(screen.getByRole('textbox', { name: "what needs to be done?" })).toBeVisible();
   });
    
   it('Should show the input field value', () => {
    render(<Todo />);
    const input = screen.getByLabelText('what needs to be done?');
        fireEvent.change(input, { target: { value: 'hello' } });
        const input1 = input.closest('input').value;
        expect(input1).toBe('hello')
   });
    
   it('Should show the input field value', () => {
    render(<Todo />);
    const input = screen.getByLabelText('what needs to be done?');
    fireEvent.change(input, { target: { value: 'hello' } });
        const input1 = input.closest('input').value;
        expect(input1).toBe('hello')
   });
    
    it('Should show Add #2', () => {
        render(<Todo />);
        const input = screen.getByLabelText('what needs to be done?');
        fireEvent.change(input, { target: { value: 'hello' } });
        const input1 = input.closest('input').value;
        fireEvent.submit(input, { target: { value: 'hello' } });
        expect(screen.getByRole('button', { name: 'Add #2' })).toBeVisible()
        const items = screen.getAllByRole('listitem')
        expect(items.length).toBe(1)
        expect(screen.getByText('hello')).toBeInTheDocument()

    });
    
});

