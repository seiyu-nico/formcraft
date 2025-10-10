import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('ラベルが表示される', () => {
    render(<TextInput name="test" label="Test Label" />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('ヘルパーテキストが表示される', () => {
    render(<TextInput name="test" helperText="This is a helper text" />);
    expect(screen.getByText('This is a helper text')).toBeInTheDocument();
  });

  it('requiredがtrueの場合、必須マーク(*)が表示される', () => {
    render(<TextInput name="test" label="Required Field" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('値の変更が処理される', () => {
    const handleChange = vi.fn();
    render(<TextInput name="test" onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new value' } });

    expect(handleChange).toHaveBeenCalledWith('new value');
  });

  it('バリデーションエラーが表示される', async () => {
    const validate = vi.fn((value: string) => {
      if (!value) return 'This field is required';
      return undefined;
    });

    render(<TextInput name="test" validate={validate} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '' } });

    await waitFor(() => {
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });
  });

  it('パスワードタイプとして表示される', () => {
    render(<TextInput name="password" type="password" />);
    const input = screen.getByRole('textbox', { hidden: true });
    expect(input).toHaveAttribute('type', 'password');
  });

  it('revealableの場合、パスワードの表示/非表示を切り替えられる', () => {
    render(<TextInput name="password" type="password" revealable />);

    const input = screen.getByRole('textbox', { hidden: true });
    const toggleButton = screen.getByLabelText('Show password');

    expect(input).toHaveAttribute('type', 'password');

    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'password');
  });

  it('無効化状態で表示される', () => {
    render(<TextInput name="test" disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('読み取り専用状態で表示される', () => {
    render(<TextInput name="test" readOnly />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('readonly');
  });

  it('デフォルト値が設定される', () => {
    render(<TextInput name="test" defaultValue="default" />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('default');
  });

  it('プレフィックスが表示される', () => {
    render(<TextInput name="price" prefix="$" />);
    expect(screen.getByText('$')).toBeInTheDocument();
  });

  it('サフィックスが表示される', () => {
    render(<TextInput name="weight" suffix="kg" />);
    expect(screen.getByText('kg')).toBeInTheDocument();
  });

  it('コピー機能が動作する', async () => {
    // Mock clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn(() => Promise.resolve()),
      },
    });

    render(<TextInput name="test" defaultValue="copy me" copyable />);

    const copyButton = screen.getByLabelText('Copy to clipboard');
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('copy me');
    });
  });

  it('数値タイプの最小値・最大値が適用される', () => {
    render(<TextInput name="age" type="number" minValue={0} maxValue={120} />);
    const input = screen.getByRole('spinbutton');
    expect(input).toHaveAttribute('min', '0');
    expect(input).toHaveAttribute('max', '120');
  });

  it('数値タイプのstepが適用される', () => {
    render(<TextInput name="price" type="number" step={0.01} />);
    const input = screen.getByRole('spinbutton');
    expect(input).toHaveAttribute('step', '0.01');
  });

  it('パターン属性が適用される', () => {
    render(<TextInput name="code" pattern="[A-Z]{2}[0-9]{4}" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('pattern', '[A-Z]{2}[0-9]{4}');
  });

  it('追加のinput属性が適用される', () => {
    render(
      <TextInput
        name="test"
        extraInputAttributes={{ 'data-testid': 'custom-input', 'aria-describedby': 'description' }}
      />
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('data-testid', 'custom-input');
    expect(input).toHaveAttribute('aria-describedby', 'description');
  });
});
