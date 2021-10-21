# Sơn Kim user app

This project was bootstrapped with `react-native init` with typescript template

The UI in this project is build on top of by [Native base](https://docs.nativebase.io/)

## API Documentation

API uri: `https://api.sonkim.upme.dev`

#### Auth

- GET `/firebase-auth/check?phone=:phone`
- POST `/firebase-auth/login`
  ``Body
        "phone": "0966499006",
        "password": "123123"
  ``
- POST `/firebase-auth/register`

  ``Body

        "idToken":"xx123132123",
        "password":"123123",
        "fullName": "Nguyen Manh Tuan",
        "email":"tuan@meete.co"

  }``

- POST `/firebase-auth/reset-password`

  `` Body

        "idToken":"123132123",
        "password":"123123",

  ``

#### Article

- GET `/user-api/articles`
- GET `/user-api/articles/:id`

#### Branches

- GET `/user-api/branches`
- GET `/user-api/branches/:id`

#### Loyalty Programs

- GET `/user-api/loyalty-programs`
- GET `/user-api/loyalty-programs/:id`

#### Stores

- GET `/user-api/stores`
- GET `/user-api/stores/:id`

#### Promotions

- GET `/user-api/promotions`
- GET `/user-api/promotions/:id`

## Pages

1. [x] Onboarding
2. [x] Login
3. [x] Register
4. [ ] Forgot password
5. [ ] Update user profile
6. [x] Home page
7. [x] BU detail
8. [ ] BU detail
9. [ ] Store/restaurant detail
10. [ ] Danh sách ưu đãi
11. [ ] Voucher detail
12. [x] Tích điểm và dùng điểm
13. [x] Quét mã
14. [x] Đăng ký thẻ
15. [x] Liên kết thẻ
16. [ ] Đổi điểm
17. [ ] Lịch sử đổi điểm
18. [ ] Quản lý thông báo
19. [x] Tìm xung quanh
20. [ ] Giỏ hàng

## Available Components

### Atoms

- [x] Button
- [x] Image: Need for caching or add loading image
- [x] Select
- [x] Text: typography text, need for custom multiple languages
- [x] TextInput
- [x] Switch button: [example](https://mui.com/components/switches/)
- [x] Checkbox
- [x] Loading: [example](https://mui.com/components/progress/)
- [x] Radio button
- [x] Avatar: View [example](https://mui.com/components/avatars/)
- [ ] Backdrop: [example](https://mui.com/components/backdrop/)

### Molecules

- [x] Category item: Item điều hướng ở trang home
- [ ] MenuIcon: A menu with only icon component
- [ ] Toggle button: [example](https://mui.com/components/toggle-button/)
- [ ] Rating: [example](https://mui.com/components/rating/)
- [ ] Tooltip: [example](https://mui.com/components/tooltips/)
- [ ] Snackbar: [example](https://mui.com/components/snackbars/)
- [ ] Breadcrumb: [example](https://mui.com/components/breadcrumbs/)
- [ ] Pagination: [example](https://mui.com/components/pagination/)
- [ ] Rating: [example](https://mui.com/components/rating/)
- [ ] Upload file button

### Organisms

- [x] Modal
- [x] PageHeader
- [x] Sidebar
- [ ] Voucher card
- [ ] Membership card ở trang home
- [ ] Membership card ở trang BU
- [ ] SpeedDial: [example](https://mui.com/components/speed-dial/)
- [ ] Accordion: [example](https://mui.com/components/accordion/)
- [x] Card: [example](https://mui.com/components/cards/)
- [ ] Drawer: [example](https://mui.com/components/drawers/)
- [x] Datepicker
- [ ] Timepicker: [example](https://mui.com/components/time-picker/)
- [ ] DateTimepicker
- [ ] DateRangePicker
- [ ] Filter: [example](https://mui.com/components/data-grid/filtering/)

### Templates

- [x] Layout
