cmake_minimum_required(VERSION 4.0)

project(bare_app_image)

set(appimagetool_version "1.9.1")

set(appimagetool_root "https://github.com/AppImage/appimagetool/releases/download/${appimagetool_version}")

file(
  DOWNLOAD
  "${appimagetool_root}/appimagetool-aarch64.AppImage"
  "${CMAKE_CURRENT_BINARY_DIR}/linux-arm64/appimagetool.AppImage"
  TLS_VERSION 1.2
  TLS_VERIFY ON
)

file(
  DOWNLOAD
  "${appimagetool_root}/appimagetool-x86_64.AppImage"
  "${CMAKE_CURRENT_BINARY_DIR}/linux-x64/appimagetool.AppImage"
  TLS_VERSION 1.2
  TLS_VERIFY ON
)

install(
  FILES "${CMAKE_CURRENT_BINARY_DIR}/linux-arm64/appimagetool.AppImage"
  DESTINATION linux-arm64
)

install(
  FILES "${CMAKE_CURRENT_BINARY_DIR}/linux-x64/appimagetool.AppImage"
  DESTINATION linux-x64
)
