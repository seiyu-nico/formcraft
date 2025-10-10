# UI補助コンポーネント調査レポート

> **調査日**: 2025-10-10
> **参照元**: Laravel Filament v3 (.references/filament/)

このドキュメントは、Laravel Filamentのフォームビルダーで使用されているUI補助コンポーネントを調査し、FormCraftに実装すべきコンポーネントをまとめたものです。

---

## 📋 目次

1. [テキスト表示系コンポーネント](#1-テキスト表示系コンポーネント)
2. [視覚的補助要素](#2-視覚的補助要素)
3. [ローディング・状態表示](#3-ローディング状態表示)
4. [レイアウト補助](#4-レイアウト補助)
5. [レイアウトコンポーネント](#5-レイアウトコンポーネント)
6. [ナビゲーション・サイドバー](#6-ナビゲーションサイドバー)
7. [インプット装飾](#7-インプット装飾)
8. [その他の補助機能](#8-その他の補助機能)
9. [FormCraft実装提案](#formcraft実装提案)

---

## 1. テキスト表示系コンポーネント

### 1.1 Text (schemas/Components/Text.php)

**概要**: 汎用テキスト表示コンポーネント

**主な機能**:
```php
Text::make('表示テキスト')
    ->color('primary')              // カラー設定
    ->size(TextSize::Medium)        // サイズ (xs/sm/base/lg/xl)
    ->weight(FontWeight::Bold)      // フォントウェイト
    ->fontFamily(FontFamily::Sans)  // フォントファミリー
    ->icon('heroicon-o-check')      // アイコン
    ->iconPosition(IconPosition::Before)
    ->badge()                       // バッジ表示
    ->copyable()                    // コピー機能
    ->tooltip('ツールチップ')
```

**使用されるTraits**:
- `CanBeCopied` - コピー機能
- `HasColor` - カラー設定
- `HasFontFamily` - フォント設定
- `HasIcon` - アイコン表示
- `HasIconPosition` - アイコン位置
- `HasIconSize` - アイコンサイズ
- `HasTooltip` - ツールチップ
- `HasWeight` - フォントウェイト

---

### 1.2 TextEntry (infolists/Components/TextEntry.php)

**概要**: フォーム表示用のテキストエントリ（Textの拡張版）

**追加機能**:
```php
TextEntry::make('name')
    ->bulleted()                    // 箇条書き表示
    ->listWithLineBreaks()          // 改行付きリスト
    ->limitList(3)                  // リスト項目数制限
    ->expandableLimitedList()       // 展開可能なリスト
    ->prose()                       // Prose表示
    ->badge()                       // バッジ表示
    ->lineClamp(3)                  // 行数制限

    // 集計関数
    ->avg('relation', 'column')
    ->sum('relation', 'column')
    ->min('relation', 'column')
    ->max('relation', 'column')
    ->counts('relation')
```

**使用されるTraits**:
- Text のすべての機能
- `CanFormatState` - 状態のフォーマット
- `HasAffixes` - Prefix/Suffix
- `HasLineClamp` - 行数制限

---

### 1.3 Label (field-wrapper.blade.php内で実装)

**概要**: フォームフィールドのラベル

**構造**:
```blade
<label for="field-id" class="fi-fo-field-label">
    {{ $labelPrefix }}
    <span class="fi-fo-field-label-content">
        {{ $label }}
        @if ($required)
            <sup class="fi-fo-field-label-required-mark">*</sup>
        @endif
    </span>
    {{ $labelSuffix }}
</label>
```

**主な機能**:
- 必須マーク表示 (`*`)
- スクリーンリーダー専用ラベル (`labelSrOnly`)
- Prefix/Suffix対応
- HTMLタグのカスタマイズ (`labelTag`)

---

### 1.4 HelperText (HasHelperText trait)

**概要**: フィールド下部に表示される説明テキスト

**実装場所**: `packages/forms/src/Components/Concerns/HasHelperText.php`

**使用方法**:
```php
TextInput::make('username')
    ->helperText('半角英数字で入力してください')
```

**内部実装**:
```php
public function helperText(string | Htmlable | Closure | null $text): static
{
    $this->belowContent(function (Component $component) use ($text): ?Text {
        $content = $component->evaluate($text);
        if (blank($content)) {
            return null;
        }
        return Text::make($content);
    });
    return $this;
}
```

---

### 1.5 Hint (HasHint trait)

**概要**: ラベル横に表示されるヒントテキスト

**実装場所**: `packages/forms/src/Components/Concerns/HasHint.php`

**使用方法**:
```php
TextInput::make('email')
    ->hint('オプション')
    ->hintColor('gray')
    ->hintIcon('heroicon-o-question-mark-circle')
    ->hintIconTooltip('詳細情報')
    ->hintAction(
        Action::make('help')
            ->icon('heroicon-o-question-mark-circle')
            ->url('...')
    )
```

**主な機能**:
- ヒントテキスト
- カラー設定
- アイコン＋ツールチップ
- アクションボタン追加

---

### 1.6 ErrorMessage (field-wrapper.blade.php内で実装)

**概要**: バリデーションエラーメッセージの表示

**構造**:
```blade
@if ($hasError)
    <p data-validation-error class="fi-fo-field-wrp-error-message">
        {{ $errorMessage }}
    </p>

    <!-- 複数エラーの場合 -->
    <ul data-validation-error class="fi-fo-field-wrp-error-list">
        @foreach ($errorMessages as $errorMessage)
            <li class="fi-fo-field-wrp-error-message">
                {{ $errorMessage }}
            </li>
        @endforeach
    </ul>
@endif
```

---

### 1.7 Description (HasDescription trait)

**概要**: コンポーネントに対する説明文（主にSection等で使用）

**実装場所**: `packages/forms/src/Components/Concerns/HasDescriptions.php`

**使用方法**:
```php
Section::make()
    ->heading('ユーザー情報')
    ->description('基本的なユーザー情報を入力してください')
```

---

### 1.8 Placeholder (HasPlaceholder trait)

**概要**: 値が空の場合に表示されるプレースホルダー

**実装場所**: `packages/support/src/Concerns/HasPlaceholder.php`

**使用方法**:
```php
TextEntry::make('status')
    ->placeholder('未設定')
```

---

## 2. 視覚的補助要素

### 2.1 Tooltip (HasTooltip trait)

**概要**: ホバー時に表示される説明ツールチップ

**実装場所**: `packages/support/src/Concerns/HasTooltip.php`

**使用方法**:
```php
->tooltip('詳細情報')
```

**HTMLレンダリング**:
```html
<div x-tooltip="{ content: '詳細情報', theme: $store.theme }">
    <!-- コンテンツ -->
</div>
```

**技術**: AlpineJS の `x-tooltip` ディレクティブを使用

---

### 2.2 Badge (support/resources/views/components/badge.blade.php)

**概要**: 小さなラベル表示用コンポーネント

**実装場所**: `packages/support/resources/views/components/badge.blade.php`

**使用方法**:
```blade
<x-filament::badge
    color="success"
    size="md"
    icon="heroicon-o-check"
    :icon-position="IconPosition::Before"
    deleteButton
>
    新規
</x-filament::badge>
```

**主な機能**:
- カラーバリエーション (primary/success/danger/warning/info/gray)
- サイズ (xs/sm/md/lg/xl)
- アイコン表示 (before/after)
- 削除ボタン付き
- ローディングインジケーター対応
- ツールチップ対応
- リンク化可能 (`tag="a"`, `href="..."`)

**HasBadge trait**:
```php
->badge('10')
->badgeColor('danger')
```

---

### 2.3 Icon (Icon.php, HasIcon trait)

**概要**: アイコン表示コンポーネント

**実装場所**:
- `packages/schemas/src/Components/Icon.php`
- `packages/support/src/Concerns/HasIcon.php`

**使用方法**:
```php
Icon::make('heroicon-o-check')
    ->color('success')
    ->tooltip('確認済み')
```

**Trait使用**:
```php
->icon('heroicon-o-user')
->iconColor('primary')
->iconPosition(IconPosition::Before)  // Before | After
->iconSize(IconSize::Small)           // xs | sm | md | lg | xl
```

**関連Traits**:
- `HasIcon` - アイコン名
- `HasIconColor` - アイコンカラー
- `HasIconPosition` - 位置（Before/After）
- `HasIconSize` - サイズ

---

### 2.4 Avatar (support/resources/views/components/avatar.blade.php)

**概要**: 画像アバター表示

**使用方法**:
```blade
<x-filament::avatar
    src="https://..."
    alt="ユーザー名"
    size="md"
    :circular="true"
/>
```

**サイズオプション**: sm | md | lg

---

## 3. ローディング・状態表示

### 3.1 LoadingIndicator (loading-indicator.blade.php)

**概要**: スピナー（ローディングアニメーション）

**実装場所**: `packages/support/resources/views/components/loading-indicator.blade.php`

**使用方法**:
```php
{{ \Filament\Support\generate_loading_indicator_html() }}
```

**Livewire連携**:
```html
<div wire:loading.delay.default>
    {{ \Filament\Support\generate_loading_indicator_html() }}
</div>
```

**サイズ**: IconSize と同じ (xs/sm/md/lg/xl)

---

### 3.2 LoadingSection (loading-section.blade.php)

**概要**: セクション全体をローディング表示

**使用方法**:
```blade
<x-filament::loading-section
    height="8rem"
    columnSpan="2"
/>
```

---

### 3.3 LoadingMessage (HasLoadingMessage trait)

**概要**: 選択肢の読み込み中メッセージ

**実装場所**: `packages/forms/src/Components/Concerns/HasLoadingMessage.php`

**使用方法**:
```php
Select::make('country')
    ->loadingMessage('国を読み込んでいます...')
```

---

## 4. レイアウト補助

### 4.1 Divider / Divided (CanBeDivided trait)

**概要**: 要素間に区切り線を表示

**実装場所**: `packages/schemas/src/Components/Concerns/CanBeDivided.php`

**使用方法**:
```php
Section::make()
    ->divided()  // 子要素間に区切り線
```

**実装**:
```php
public function divided(bool | Closure $condition = true): static
{
    $this->isDivided = $condition;
    return $this;
}
```

---

### 4.2 EmptyState (EmptyState.php)

**概要**: データが空の状態を表示

**実装場所**: `packages/schemas/src/Components/EmptyState.php`

**使用方法**:
```php
EmptyState::make('データがありません')
    ->description('新しいアイテムを追加してください')
    ->icon('heroicon-o-inbox')
    ->iconColor('gray')
    ->iconSize(IconSize::Large)
    ->footer([
        Action::make('create')
            ->label('新規作成')
            ->button()
    ])
```

**主な機能**:
- 見出し（heading）
- 説明文（description）
- アイコン（カラー・サイズ設定可能）
- フッターアクション

---

## 5. レイアウトコンポーネント

### 5.1 Section (schemas/Components/Section.php)

**概要**: カード型のセクションコンテナ（最も重要なレイアウトコンポーネント）

**実装場所**: `packages/schemas/src/Components/Section.php`

**使用方法**:
```php
Section::make('ユーザー情報')
    ->description('基本的な情報を入力してください')
    ->icon('heroicon-o-user')
    ->iconColor('primary')
    ->iconSize(IconSize::Large)

    // レイアウト設定
    ->aside()               // サイドバーレイアウト（2カラム）
    ->compact()             // コンパクト表示
    ->collapsible()         // 折りたたみ可能
    ->collapsed()           // 初期状態で折りたたみ
    ->divided()             // 子要素間に区切り線

    // アクション
    ->headerActions([...])  // ヘッダーアクション
    ->footerActions([...])  // フッターアクション

    // スタイル
    ->secondary()           // セカンダリースタイル

    ->schema([
        TextInput::make('name'),
        TextInput::make('email'),
    ])
```

**主な機能**:
- **aside()** - 見出し/説明を左、コンテンツを右に配置する2カラムレイアウト
- **collapsible()** - セクションを折りたたみ可能に
- **compact()** - パディングを小さくしてコンパクト表示
- **divided()** - 子要素間に区切り線を表示
- **headerActions/footerActions** - アクションボタンの追加

**使用されるTraits**:
- `CanBeCollapsed` - 折りたたみ機能
- `CanBeCompact` - コンパクト表示
- `CanBeDivided` - 区切り線
- `CanBeSecondary` - セカンダリースタイル
- `HasDescription` - 説明文
- `HasHeading` - 見出し
- `HasIcon` - アイコン
- `HasFooterActions` - フッターアクション
- `HasHeaderActions` - ヘッダーアクション

---

### 5.2 Grid (schemas/Components/Grid.php)

**概要**: グリッドレイアウトコンテナ

**使用方法**:
```php
Grid::make(2)  // 2カラムグリッド
    ->schema([
        TextInput::make('first_name'),
        TextInput::make('last_name'),
    ])

// レスポンシブグリッド
Grid::make([
    'default' => 1,
    'sm' => 2,
    'lg' => 3,
    'xl' => 4,
])
```

**HasContainerGridLayout trait**:
```php
Section::make()
    ->columns(2)  // セクション内を2カラムに
    ->schema([...])
```

---

### 5.3 Flex (schemas/Components/Flex.php)

**概要**: Flexboxレイアウトコンテナ

**使用方法**:
```php
Flex::make([
    TextInput::make('name'),
    TextInput::make('email'),
])
    ->from('md')                           // mdブレークポイントからFlexレイアウト
    ->verticalAlignment(VerticalAlignment::Center)  // 垂直方向の配置
```

**使用されるTraits**:
- `HasFromBreakpoint` - ブレークポイント指定
- `HasVerticalAlignment` - 垂直方向の配置

---

### 5.4 Group (schemas/Components/Group.php)

**概要**: シンプルなグループ化コンテナ（スタイルなし）

**使用方法**:
```php
Group::make([
    TextInput::make('name'),
    TextInput::make('email'),
])
```

---

### 5.5 Fieldset (schemas/Components/Fieldset.php)

**概要**: HTML fieldset 要素のラッパー

**使用方法**:
```php
Fieldset::make('個人情報')
    ->schema([
        TextInput::make('name'),
        TextInput::make('email'),
    ])
```

---

### 5.6 Tabs (schemas/Components/Tabs.php)

**概要**: タブナビゲーション

**使用方法**:
```php
use Filament\Schemas\Components\Tabs\Tab;

Tabs::make('Settings')
    ->tabs([
        Tab::make('基本情報')
            ->schema([
                TextInput::make('name'),
            ]),
        Tab::make('セキュリティ')
            ->schema([
                TextInput::make('password'),
            ]),
    ])
    ->activeTab(1)                      // アクティブタブ（1始まり）
    ->persistTabInQueryString('tab')    // クエリストリングに保存
```

**主な機能**:
- タブの切り替え
- アクティブタブの保持（クエリストリング/Livewire）
- 縦型タブ（`vertical()`）

---

### 5.7 Wizard (schemas/Components/Wizard.php)

**概要**: ステップバイステップのウィザード

**使用方法**:
```php
use Filament\Schemas\Components\Wizard\Step;

Wizard::make([
    Step::make('個人情報')
        ->schema([
            TextInput::make('name'),
        ]),
    Step::make('連絡先')
        ->schema([
            TextInput::make('email'),
        ]),
    Step::make('確認')
        ->schema([...]),
])
    ->startStep(1)              // 開始ステップ
    ->skippable()               // ステップスキップ可能
    ->submitAction(...)         // 送信アクション
    ->nextAction(...)           // 次へアクション
    ->previousAction(...)       // 戻るアクション
```

**主な機能**:
- ステップ間のナビゲーション
- バリデーション
- ステップスキップ
- ステップの保持（クエリストリング）

---

### 5.8 ColumnSpan (CanSpanColumns trait)

**概要**: グリッド内での列のスパン（幅）制御

**使用方法**:
```php
TextInput::make('description')
    ->columnSpan(2)         // 2列分の幅
    ->columnSpan('full')    // 全幅

// レスポンシブ
TextInput::make('description')
    ->columnSpan([
        'default' => 1,
        'md' => 2,
        'lg' => 'full',
    ])

// カラムの開始位置
TextInput::make('name')
    ->columnStart(2)        // 2列目から開始
```

---

## 6. ナビゲーション・サイドバー

### 6.1 Sidebar (panels/resources/views/components/sidebar/)

**概要**: アプリケーションのメインサイドバー（管理画面用）

**実装場所**: `packages/panels/resources/views/components/sidebar/`

**構造**:
```blade
<aside class="fi-sidebar">
    <!-- サイドバーヘッダー -->

    <!-- ナビゲーショングループ -->
    <x-filament-panels::sidebar.group
        label="メニュー"
        icon="heroicon-o-folder"
        collapsible
        :items="$items"
    />
</aside>
```

**主な機能**:
- 折りたたみ可能（モバイル/デスクトップ）
- グループ化されたナビゲーション
- アクティブ状態の表示
- バッジ表示
- ツールチップ（折りたたみ時）
- ドロップダウンメニュー（折りたたみ時）

---

### 6.2 Sidebar Group (sidebar/group.blade.php)

**概要**: サイドバー内のナビゲーショングループ

**Props**:
```php
[
    'label' => 'グループラベル',
    'icon' => 'heroicon-o-folder',
    'collapsible' => true,
    'items' => [...],
]
```

**主な機能**:
- グループの折りたたみ
- グループアイコン
- サブアイテムの階層表示
- 折りたたみ時のドロップダウンメニュー

---

### 6.3 Sidebar Item (sidebar/item.blade.php)

**概要**: サイドバーのナビゲーションアイテム

**Props**:
```php
[
    'url' => '/dashboard',
    'active' => true,
    'icon' => 'heroicon-o-home',
    'activeIcon' => 'heroicon-s-home',
    'badge' => '10',
    'badgeColor' => 'danger',
    'badgeTooltip' => '未読メッセージ',
    'childItems' => [...],
]
```

**主な機能**:
- アクティブ状態の表示
- アイコン（通常/アクティブ）
- バッジ表示
- ツールチップ（折りたたみ時）
- サブアイテム（ネストされたナビゲーション）

**特徴**:
- サイドバー折りたたみ時はアイコンのみ表示
- ホバー時にツールチップでラベル表示
- グループ化されたアイテムは視覚的な区切り線

---

### 6.4 AlpineJS Sidebar Store

**機能**:
```javascript
Alpine.store('sidebar', {
    isOpen: true,

    open() {
        this.isOpen = true
    },

    close() {
        this.isOpen = false
    },

    toggle() {
        this.isOpen = ! this.isOpen
    },

    groupIsCollapsed(label) {
        return this.collapsedGroups.includes(label)
    },

    toggleCollapsedGroup(label) {
        if (this.groupIsCollapsed(label)) {
            this.collapsedGroups = this.collapsedGroups.filter(g => g !== label)
        } else {
            this.collapsedGroups.push(label)
        }
    }
})
```

---

## 7. インプット装飾

### 7.1 Prefix / Suffix (HasAffixes trait)

**概要**: 入力フィールドの前後に要素を追加

**実装場所**: `packages/forms/src/Components/Concerns/HasAffixes.php`

**使用方法**:
```php
TextInput::make('price')
    // テキストPrefix/Suffix
    ->prefix('$')
    ->suffix('USD')

    // アイコンPrefix/Suffix
    ->prefixIcon('heroicon-o-user')
    ->prefixIconColor('gray')
    ->suffixIcon('heroicon-o-check')
    ->suffixIconColor('success')

    // アクションPrefix/Suffix
    ->prefixAction(
        Action::make('help')
            ->icon('heroicon-o-question-mark-circle')
    )
    ->suffixAction(
        Action::make('generate')
            ->icon('heroicon-o-sparkles')
    )

    // インライン表示
    ->inlinePrefix()
    ->inlineSuffix()
```

**主な機能**:
- テキストPrefix/Suffix
- アイコンPrefix/Suffix（カラー設定可能）
- アクションPrefix/Suffix（小アイコンボタン）
- インライン/非インライン表示切り替え

---

## 8. その他の補助機能

### 8.1 CanBeCopied (CanBeCopied trait)

**概要**: クリップボードコピー機能

**実装場所**: `packages/support/src/Concerns/CanBeCopied.php`

**使用方法**:
```php
TextEntry::make('api_key')
    ->copyable()
    ->copyMessage('コピーしました!')
    ->copyMessageDuration(2000)  // ミリ秒
```

---

### 8.2 HasBadgeTooltip (HasBadgeTooltip trait)

**概要**: バッジにツールチップを追加

**使用方法**:
```php
->badge('10')
->badgeTooltip('未読メッセージ')
```

---

### 8.3 CanWrap (CanWrap trait)

**概要**: テキストの折り返し制御

**実装場所**: `packages/support/src/Concerns/CanWrap.php`

**使用方法**:
```php
TextEntry::make('description')
    ->wrap()  // 折り返しを有効化
```

---

### 8.4 HasLineClamp (HasLineClamp trait)

**概要**: 表示行数の制限

**実装場所**: `packages/support/src/Concerns/HasLineClamp.php`

**使用方法**:
```php
TextEntry::make('description')
    ->lineClamp(3)  // 3行まで表示
```

**CSS実装**:
```css
.element {
    --line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--line-clamp);
    overflow: hidden;
}
```

---

## 9. CSS/スタイルクラス一覧

### フィールド関連
```css
.fi-fo-field                        /* フィールドラッパー */
.fi-fo-field-label                  /* ラベル */
.fi-fo-field-label-content          /* ラベルコンテンツ */
.fi-fo-field-label-required-mark    /* 必須マーク (*) */
.fi-fo-field-wrp-error-message      /* エラーメッセージ */
.fi-fo-field-wrp-error-list         /* エラーリスト */
```

### テキスト関連
```css
.fi-in-text                         /* TextEntry */
.fi-in-text-item                    /* テキストアイテム */
.fi-in-placeholder                  /* プレースホルダー */
.fi-prose                           /* Prose表示 */
.fi-bulleted                        /* 箇条書き */
```

### バッジ・アイコン
```css
.fi-badge                           /* バッジ */
.fi-badge-label                     /* バッジラベル */
.fi-badge-delete-btn                /* バッジ削除ボタン */
.fi-icon                            /* アイコン */
```

### セクション・レイアウト
```css
.fi-section                         /* セクション */
.fi-section-header-heading          /* セクション見出し */
.fi-sidebar                         /* サイドバー */
.fi-sidebar-group                   /* サイドバーグループ */
.fi-sidebar-item                    /* サイドバーアイテム */
.fi-sidebar-item-btn                /* サイドバーアイテムボタン */
.fi-sidebar-item-label              /* サイドバーアイテムラベル */
.fi-sidebar-item-icon               /* サイドバーアイテムアイコン */
.fi-sidebar-item-badge-ctn          /* サイドバーアイテムバッジ */
```

### サイズ
```css
.fi-size-xs                         /* Extra Small */
.fi-size-sm                         /* Small */
.fi-size-md                         /* Medium */
.fi-size-lg                         /* Large */
.fi-size-xl                         /* Extra Large */
```

### カラー（Tailwind CSS v4対応）
```css
.fi-color-primary                   /* Primary */
.fi-color-success                   /* Success/Green */
.fi-color-danger                    /* Danger/Red */
.fi-color-warning                   /* Warning/Yellow */
.fi-color-info                      /* Info/Blue */
.fi-color-gray                      /* Gray */
```

---

## FormCraft実装提案

以下は、FormCraftに実装すべきUI補助コンポーネントの優先度付きリストです。

### 優先度: 高 🔴

基本的なフォーム機能に必須のコンポーネント

#### 1. Label
```tsx
interface LabelProps {
  htmlFor: string;
  required?: boolean;
  srOnly?: boolean;
  children: React.ReactNode;
  className?: string;
}

<Label htmlFor="username" required>
  ユーザー名
</Label>
```

**参考**: `field-wrapper.blade.php` lines 81-130

---

#### 2. HelperText
```tsx
interface HelperTextProps {
  children: React.ReactNode;
  className?: string;
}

<HelperText>
  半角英数字で入力してください
</HelperText>
```

**参考**: `HasHelperText.php`

---

#### 3. ErrorText
```tsx
interface ErrorTextProps {
  children: React.ReactNode;
  className?: string;
}

<ErrorText>
  必須項目です
</ErrorText>
```

**参考**: `field-wrapper.blade.php` lines 159-194

---

#### 4. Tooltip (wrapper component)
```tsx
interface TooltipProps {
  content: string;
  children: React.ReactElement;
  theme?: 'light' | 'dark';
}

<Tooltip content="詳細情報">
  <IconButton icon="info" />
</Tooltip>
```

**実装方法**:
- Tippy.js または Radix UI Tooltip を使用
- AlpineJS の `x-tooltip` をReactで再現

**参考**: `HasTooltip.php`

---

#### 5. Badge
```tsx
interface BadgeProps {
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'gray';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  icon?: string | React.ReactNode;
  iconPosition?: 'before' | 'after';
  onDelete?: () => void;
  children: React.ReactNode;
  className?: string;
}

<Badge color="success" size="sm" icon="check">
  新規
</Badge>

<Badge color="primary" onDelete={() => console.log('deleted')}>
  削除可能
</Badge>
```

**参考**: `badge.blade.php`

---

### 優先度: 中 🟡

ユーザー体験を向上させるコンポーネント

#### 6. Icon
```tsx
interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}

<Icon name="check" size="sm" color="success" />
```

**実装方法**:
- Heroicons を使用
- SVGコンポーネントとして実装

**参考**: `Icon.php`, `icon.blade.php`

---

#### 7. LoadingSpinner
```tsx
interface LoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

<LoadingSpinner size="sm" />
```

**実装方法**:
- SVG or CSS アニメーション
- Tailwind CSS でスタイリング

**参考**: `loading-indicator.blade.php`

---

#### 8. EmptyState
```tsx
interface EmptyStateProps {
  heading: string;
  description?: string;
  icon?: string | React.ReactNode;
  iconColor?: string;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
  actions?: React.ReactNode;
  className?: string;
}

<EmptyState
  heading="データがありません"
  description="新しいアイテムを追加してください"
  icon="inbox"
  actions={
    <Button onClick={onCreate}>新規作成</Button>
  }
/>
```

**参考**: `EmptyState.php`

---

#### 9. InputAffix (Prefix/Suffix wrapper)
```tsx
interface InputAffixProps {
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  prefixIcon?: string;
  suffixIcon?: string;
  children: React.ReactElement;
  className?: string;
}

<InputAffix prefix="$" suffix="USD">
  <input type="number" />
</InputAffix>

<InputAffix
  prefixIcon="user"
  suffixIcon="check"
>
  <input type="text" />
</InputAffix>
```

**参考**: `HasAffixes.php`, `TextInput` の実装

---

#### 10. Hint
```tsx
interface HintProps {
  text: string;
  color?: string;
  icon?: string;
  tooltip?: string;
  actions?: React.ReactNode;
  className?: string;
}

<Hint
  text="オプション"
  color="gray"
  icon="question-mark-circle"
  tooltip="詳細情報"
/>
```

**参考**: `HasHint.php`

---

### 優先度: 低 🟢

追加的な機能を提供するコンポーネント

#### 11. Avatar
```tsx
interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  circular?: boolean;
  className?: string;
}

<Avatar
  src="https://..."
  alt="ユーザー名"
  size="md"
  circular
/>
```

**参考**: `avatar.blade.php`

---

#### 12. Divider
```tsx
interface DividerProps {
  className?: string;
}

<Divider />
```

**実装方法**:
- 単純な `<hr>` または `<div>` 要素
- Tailwind CSS でスタイリング

**参考**: `CanBeDivided.php`

---

#### 13. Description
```tsx
interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

<Description>
  このセクションでは、基本的な情報を入力してください。
</Description>
```

**参考**: Section コンポーネントの `description` prop

---

## 実装の優先順位とロードマップ

### Phase 1: 基本テキストコンポーネント（1週間）
1. Label ✓
2. HelperText ✓
3. ErrorText ✓

### Phase 2: 視覚補助コンポーネント（1週間）
4. Tooltip ✓
5. Badge ✓
6. Icon ✓

### Phase 3: 状態表示コンポーネント（3日）
7. LoadingSpinner ✓
8. EmptyState ✓

### Phase 4: 入力装飾コンポーネント（1週間）
9. InputAffix (Prefix/Suffix) ✓
10. Hint ✓

### Phase 5: 追加コンポーネント（3日）
11. Avatar
12. Divider
13. Description

---

## 技術的な考慮事項

### 1. スタイリング方針
- **Tailwind CSS v4** を使用
- Filament の CSS クラス命名規則を参考にしつつ、独自のプレフィックス (`fc-` など) を使用
- ダークモード対応

### 2. TypeScript型定義
- すべてのコンポーネントに厳密な型定義
- Props の型を `*.types.ts` ファイルに分離

### 3. アクセシビリティ
- ARIA属性の適切な使用
- キーボードナビゲーション対応
- スクリーンリーダー対応

### 4. ストーリーブック
- 各コンポーネントに対応する `.stories.tsx` を作成
- バリエーション、状態、インタラクションを網羅

### 5. テスト
- Vitest でユニットテスト
- インタラクションのテスト

---

## 参考資料

### Filament ソースコード
- **Forms**: `.references/filament/packages/forms/`
- **Infolists**: `.references/filament/packages/infolists/`
- **Schemas**: `.references/filament/packages/schemas/`
- **Support**: `.references/filament/packages/support/`

### キーファイル
- **Field Wrapper**: `packages/forms/resources/views/components/field-wrapper.blade.php`
- **TextEntry**: `packages/infolists/src/Components/TextEntry.php`
- **Text**: `packages/schemas/src/Components/Text.php`
- **Badge**: `packages/support/resources/views/components/badge.blade.php`
- **Icon**: `packages/schemas/src/Components/Icon.php`
- **EmptyState**: `packages/schemas/src/Components/EmptyState.php`

### Traits/Concerns
- **HasHelperText**: `packages/forms/src/Components/Concerns/HasHelperText.php`
- **HasHint**: `packages/forms/src/Components/Concerns/HasHint.php`
- **HasAffixes**: `packages/forms/src/Components/Concerns/HasAffixes.php`
- **HasTooltip**: `packages/support/src/Concerns/HasTooltip.php`
- **HasBadge**: `packages/support/src/Concerns/HasBadge.php`
- **CanBeCopied**: `packages/support/src/Concerns/CanBeCopied.php`
- **HasLineClamp**: `packages/support/src/Concerns/HasLineClamp.php`

---

## まとめ

このドキュメントでは、Laravel Filamentの豊富なUI補助コンポーネントを調査し、FormCraftに実装すべきコンポーネントを優先度付きでリストアップしました。

**次のステップ**:
1. Phase 1 から順次実装を開始
2. 各コンポーネントに対応するStorybookストーリーを作成
3. テストを記述
4. ドキュメントを更新

**実装開始時の注意点**:
- Filament の実装を直接コピーするのではなく、Reactのベストプラクティスに従って再設計
- TypeScript の型安全性を最大限に活用
- Tailwind CSS v4 の新機能を活用
- アクセシビリティを最優先に考慮
