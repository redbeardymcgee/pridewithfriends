{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

    # Support a particular subset of the Nix systems
    # systems.url = "github:nix-systems/default";
  };

  outputs = {nixpkgs, ...}: let
    eachSystem = f:
      nixpkgs.lib.genAttrs nixpkgs.lib.systems.flakeExposed (system: f nixpkgs.legacyPackages.${system});
  in {
    devShells = eachSystem (pkgs: {
      default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_24

          # Required to enable the language server
          # typescript
          # typescript-language-server

          # We use tailwind
          # tailwindcss
          # tailwindcss-language-server

          # Docs are written in mdx
          # mdx-language-server

          # Includes JSON & HTML language servers
          # vscode-langservers-extracted

          # Better & faster than `prettier` and `eslint`
          # biome
        ];
      };
    });
  };
}
