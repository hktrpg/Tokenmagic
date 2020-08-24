import { forceField } from '../glsl/fragmentshaders/forcefield.js';
import { customVertex2D } from '../glsl/vertexshaders/customvertex2D.js';
import { Anime } from "../Anime.js";
import "./proto/FilterProto.js";

export class FilterForceField extends PIXI.Filter {
    constructor(params) {
        let {
            time,
            color,
            lightAlpha,
            blend,
            shieldType,
            posLightX,
            posLightY,
            lightSize,
            scale,
            intensity,
            radius,
            chromatic
        } = Object.assign({}, FilterForceField.defaults, params);

        // using specific vertex shader and fragment shader
        super(customVertex2D, forceField);

        this.uniforms.color = new Float32Array([1.0, 1.0, 1.0]);
        this.uniforms.posLight = new Float32Array([1.0, 1.0]);
        
        Object.assign(this, {
            time,
            color,
            lightAlpha,
            blend,
            shieldType,
            posLightX,
            posLightY,
            lightSize,
            scale,
            intensity,
            radius,
            chromatic
        });

        this.zOrder = 2000;
        this.animated = {};
        this.setTMParams(params);
        if (!this.dummy) {
            this.anime = new Anime(this);
            this.normalizeTMParams();
        }
    }

    get time() {
        return this.uniforms.time;
    }

    set time(value) {
        this.uniforms.time = value;
    }

    get color() {
        return PIXI.utils.rgb2hex(this.uniforms.color);
    }

    set color(value) {
        PIXI.utils.hex2rgb(value, this.uniforms.color);
    }

    get blend() {
        return this.uniforms.blend;
    }

    set blend(value) {
        this.uniforms.blend = Math.floor(value);
    }

    get lightAlpha() {
        return this.uniforms.lightColorAlpha;
    }

    set lightAlpha(value) {
        this.uniforms.lightColorAlpha = value;
    }

    get shieldType() {
        return this.uniforms.shieldType;
    }

    set shieldType(value) {
        this.uniforms.shieldType = Math.floor(value);
    }

    get posLightX() {
        return this.uniforms.posLight[0];
    }

    set posLightX(value) {
        this.uniforms.posLight[0] = value;
    }

    get posLightY() {
        return this.uniforms.posLight[1];
    }

    set posLightY(value) {
        this.uniforms.posLight[1] = value;
    }

    get lightSize() {
        return this.uniforms.lightSize;
    }

    set lightSize(value) {
        this.uniforms.lightSize = value;
    }

    get scale() {
        return this.uniforms.scale;
    }

    set scale(value) {
        this.uniforms.scale = value;
    }

    get intensity() {
        return this.uniforms.intensity;
    }

    set intensity(value) {
        this.uniforms.intensity = value;
    }

    get radius() {
        return this.uniforms.radius;
    }

    set radius(value) {
        this.uniforms.radius = value;
    }

    get chromatic() {
        return this.uniforms.chromatic;
    }

    set chromatic(value) {
        if (!(value == null) && typeof value === "boolean") {
            this.uniforms.chromatic = value;
        }
    }
}

FilterForceField.defaults = {
    time: 0,
    color: 0xBBBBBB,
    lightAlpha: 1.0,
    blend: 2,
    shieldType: 1,
    posLightX: 0.65,
    posLightY: 0.25,
    lightSize: 0.4830,
    scale: 1,
    intensity: 1,
    radius: 1,
    chromatic: false,
};




