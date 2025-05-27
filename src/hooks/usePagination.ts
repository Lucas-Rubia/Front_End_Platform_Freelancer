import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE, IPagination } from "@/types/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function usePagination(){
    const [searchParams, setSearchParams] = useSearchParams();

    // 1. Inicializa lendo da URL ou caindo em defaults 
    const initialPage = Number(searchParams.get("pageNumber")) || DEFAULT_PAGE_NUMBER;
    const initialSize = Number(searchParams.get("pageSize")) || DEFAULT_PAGE_SIZE;


    const [pagination, setPagination] = useState<IPagination>({
        currentPage: initialPage,
        pageSize: initialSize,
        totalCount: 0,
        totalPages: 0
    });

    // 2. Função utilitaria para empurar paramentros para a URL
    const syncToURL = (page: number, size: number) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("pageNumber", String(page));
        newParams.set("pageSize", String(size));

        setSearchParams(newParams, {
            replace: true
        })
    }

    // 3. Atualiza a página e a URL
    const setPage = (page: number) => {
        setPagination((prev) => {
            const next = { ...prev, currentPage: page};
            syncToURL(page, prev.pageSize)
            return next;
        })
    }

    // 4. Atualiza PageSize resetando para página 1 e URL
        const setPageSize = (size: number) => {
        setPagination((prev) => {
            const next = { ...prev, pageSize: size, currentPage: 1};
            syncToURL(1, size)
            return next;
        })
    }

    // 5. Se alguém usar o SetPagination diretamente, garante sincronizar a URL
    const setFullPagination = (newPagination: IPagination) => {
        setPagination(newPagination);
        // syncToURL(newPagination.currentPage, newPagination.pageSize);
    }
    
    // 6. Se o usúario navegar manualmete e mudar o SearchParams reflete no State
    useEffect(() => {
        // const initialPage = Number(searchParams.get("pageNumber")) || DEFAULT_PAGE_NUMBER;
        // const initialSize = Number(searchParams.get("pageSize")) || DEFAULT_PAGE_SIZE;

        setPagination((prev) => ({
            ...prev, 
            currentPage: initialPage,
            pageSize: initialSize
        }))
        
    }, [searchParams]);

    //7. Validação interna: Garante 1 <= a currentPage e <= totalPages
    useEffect(() => {
        const {currentPage, totalPages} = pagination

        if(totalPages === 0) return;
        if(currentPage < 1){
            setPage(1)
        }else if(currentPage > totalPages){
            setPage(totalPages)
        }
    },[pagination.currentPage, pagination.totalPages])

    return {
        pagination, 
        setPage,
        setPageSize,
        setPagination: setFullPagination
    }
}