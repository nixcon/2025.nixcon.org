{ pkgs ? import <nixpkgs> { }
, version ? "none"
}: with pkgs; stdenv.mkDerivation {
  inherit version;
  pname = "nixcon-2025-website";
  src = lib.cleanSource ./.;
  nativeBuildInputs = [ hugo ];
  buildPhase = "hugo -d $out";
}
