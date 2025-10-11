import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Grid } from './Grid';

describe('Grid', () => {
  it('子要素が表示される', () => {
    render(
      <Grid>
        <div>Child 1</div>
        <div>Child 2</div>
      </Grid>
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('デフォルトで2カラムのグリッドが適用される', () => {
    const { container } = render(
      <Grid>
        <div>Child 1</div>
        <div>Child 2</div>
      </Grid>
    );

    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-2');
  });

  it('指定したカラム数が適用される', () => {
    const { container } = render(
      <Grid columns={3}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Grid>
    );

    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-3');
  });

  it('レスポンシブなカラム設定が適用される', () => {
    const { container } = render(
      <Grid columns={{ default: 1, md: 2, lg: 3 }}>
        <div>Child 1</div>
      </Grid>
    );

    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-3');
  });

  it('カスタムクラス名が適用される', () => {
    const { container } = render(
      <Grid className="custom-grid">
        <div>Child</div>
      </Grid>
    );

    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('custom-grid');
  });

  it('gap-6がデフォルトで適用される', () => {
    const { container } = render(
      <Grid>
        <div>Child</div>
      </Grid>
    );

    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('gap-6');
  });

  it('複数のレスポンシブブレークポイントが正しく適用される', () => {
    const { container } = render(
      <Grid
        columns={{
          default: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 6,
          '2xl': 12,
        }}
      >
        <div>Child</div>
      </Grid>
    );

    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('sm:grid-cols-2');
    expect(grid).toHaveClass('md:grid-cols-3');
    expect(grid).toHaveClass('lg:grid-cols-4');
    expect(grid).toHaveClass('xl:grid-cols-6');
    expect(grid).toHaveClass('2xl:grid-cols-12');
  });
});
