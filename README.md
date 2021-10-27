# Sơn Kim user app

This project was bootstrapped with `react-native init` with typescript template

The UI in this project is build on top of by [Native base](https://docs.nativebase.io/)

## API Documentation

API uri: `https://api.sonkim.upme.dev`

#### Auth

- GET `/firebase-auth/check?phone=:phone`
- POST `/firebase-auth/login`
  
  Body
  
  ```
    "phone": "0966499006",
    "password": "123123"
    ```
  
- POST `/firebase-auth/register`

    Body
    ```
    "idToken":"xx123132123",
    "password":"123123",
    "fullName": "Nguyen Manh Tuan",
    "email":"tuan@meete.co"
    ```

- POST `/firebase-auth/reset-password`

    Body
    ```
    "idToken":"123132123",
    "password":"123123",
    ```

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

#### Upload
- POST `/user-upload/presignedurl`

    Body
    ```
    "fileName": "my_avatar.jpeg",
    "fileType": "image/jpeg"
    ```

## Pages

-  [x] Onboarding
-  [x] Login
-  [x] Register
-  [x] Forgot password
-  [x] Update user profile  //  Tài
-  [x] Home page
-  [x] BU detail
-  [ ] Store/restaurant detail  //  Khánh
-  [x] Danh sách ưu đãi
-  [ ] Voucher detail  //  Tài
-  [ ] Tích điểm và dùng điểm  //  Khánh
-  [x] Quét mã     //  Khánh
-  [x] Đăng ký thẻ
-  [x] Liên kết thẻ
-  [ ] Đổi điểm    // Khánh
-  [ ] Lịch sử đổi điểm    // Khánh
-  [x] Quản lý thông báo // Tài
-  [x] Tìm xung quanh
-  [ ] Giỏ hàng
-  [ ] Gift Cards   //  Tài

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
- [x] Toggle button: [example](https://mui.com/components/toggle-button/)
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
- [x] Voucher card
- [x] Membership card ở trang home
- [x] Membership card ở trang BU
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
