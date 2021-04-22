import { useCallback, useMemo, useState } from "react";

interface IScrollProps {
    sizes: number[];
    viewSize: number;
}

const maxOffset = 0;
// 滚动间隔 1 像素
const delta = 1;

/**
 * 滚动需要
 * 1. 容器尺寸 viewSize
 * 2. 内容尺寸 sizes 如：[20, 30, 10], 相加得到 contentSize
 * 3. 最大滚动值固定 0，最小则为 viewSize - contentSize
 */
function useScroll(props: IScrollProps) {
    const { sizes, viewSize } = props;
    // offset 为负数
    const [offset, setOffset] = useState<number>(0);

    // 根据渲染 size 项算出每项位置边界，开头默认 0
    // 如：[0, 10, 20]
    const locations = useMemo(() => {
        const result = [0];
        sizes.forEach((item) => {
            const current = item + result[result.length - 1];
            result.push(current);
        });
        return result;
    }, [sizes]);

    const minOffset = useMemo(() => {
        const last = locations[locations.length - 1];
        return viewSize - last;
    }, [viewSize, locations]);

    // FIXME：边界处理 minOffset
    const handleScroll = useCallback((deltaOffset: number): Promise<number> => {
        return new Promise((resolve) => {
            setOffset((pre) => {
                // 最新滚动位置
                const value = pre - delta * deltaOffset;
                const newOffset = limit(maxOffset, minOffset, value);
                resolve(newOffset);
                return newOffset;
            })
        });
        
    }, [minOffset]);

    const [firstIndex, lastIndex] = useMemo(() => {
        const positiveOffset = Math.abs(offset);
        
        // 视窗中开始、结束项的下标
        const firstIndex = getTargetIdx(locations, positiveOffset) - 1;
        const lastIndex = getTargetIdx(locations, positiveOffset + viewSize);
        return [firstIndex, lastIndex];
    }, [offset, locations, viewSize]);

    return {
        offset,
        locations,
        firstIndex,
        lastIndex,
        handleScroll,
    }
}

function limit(max: number, min: number, value: number) {
    if (value > max) {
        return max;
    }

    if (value < min) {
        return min;
    }

    return value;
}

/**
 * 获取 target 在数组中合适的位置
 * @param numArray 递增的数组
 * @param target
 */
 function getTargetIdx(numArray: number[], target: number) {
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > target) {
            return i;
        }
    }
    return numArray.length;
}

export default useScroll;