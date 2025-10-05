import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Section } from './Section';

describe('Section', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('見出しが表示される', () => {
    render(<Section heading="Test Heading">Content</Section>);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('説明文が表示される', () => {
    render(
      <Section heading="Heading" description="Test Description">
        Content
      </Section>
    );
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('子要素が表示される', () => {
    render(<Section heading="Heading">Test Content</Section>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('アイコンが表示される', () => {
    const icon = <svg data-testid="test-icon" />;
    render(
      <Section heading="Heading" icon={icon}>
        Content
      </Section>
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('折りたたみ可能な場合、トグルボタンが表示される', () => {
    render(
      <Section heading="Heading" collapsible>
        Content
      </Section>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('折りたたみ可能な場合、クリックでコンテンツが表示/非表示される', () => {
    render(
      <Section heading="Heading" collapsible>
        <div>Test Content</div>
      </Section>
    );

    const button = screen.getByRole('button');
    const content = screen.getByText('Test Content');

    // 初期状態では表示されている
    expect(content).toBeInTheDocument();

    // クリックで非表示
    fireEvent.click(button);
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();

    // 再度クリックで表示
    fireEvent.click(button);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('初期状態で折りたたまれている', () => {
    render(
      <Section heading="Heading" collapsible collapsed>
        <div>Test Content</div>
      </Section>
    );

    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });

  it('IDとpersistCollapsedを指定すると状態がlocalStorageに保存される', () => {
    const { rerender } = render(
      <Section heading="Heading" collapsible id="test-section" persistCollapsed>
        <div>Test Content</div>
      </Section>
    );

    const button = screen.getByRole('button');

    // 折りたたむ
    fireEvent.click(button);

    // localStorageに保存されているか確認
    expect(localStorage.getItem('section-collapsed-test-section')).toBe('true');

    // アンマウントして再マウント
    rerender(<div />);
    rerender(
      <Section heading="Heading" collapsible id="test-section" persistCollapsed>
        <div>Test Content</div>
      </Section>
    );

    // 折りたたまれた状態が維持されているか確認
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });

  it('compactモードでは小さいパディングが適用される', () => {
    const { container } = render(
      <Section heading="Heading" compact>
        Content
      </Section>
    );

    const header = container.querySelector('[class*="px-4"]');
    expect(header).toBeInTheDocument();
  });

  it('カスタムクラス名が適用される', () => {
    const { container } = render(
      <Section heading="Heading" className="custom-class">
        Content
      </Section>
    );

    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-class');
  });

  it('カスタムIDが適用される', () => {
    const { container } = render(
      <Section heading="Heading" id="custom-id">
        Content
      </Section>
    );

    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'custom-id');
  });

  it('折りたたみ可能でない場合は常にコンテンツが表示される', () => {
    render(
      <Section heading="Heading" collapsible={false}>
        <div>Test Content</div>
      </Section>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
